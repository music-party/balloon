import { PRIVATE_USER, PUBLIC_USER } from "../fixtures/users";
import Client from "../utils/client";
import UsersApi from "./Users";

jest.mock("../utils/client");
const ClientMock = Client as jest.MockedClass<typeof Client>;
const client = new ClientMock("token");
const users = new UsersApi(client);

describe("Users", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("Get User's Profile", async () => {
    ClientMock.prototype.get.mockResolvedValue(PUBLIC_USER);

    const res = await users.getUser("foo");

    expect(res).toEqual(PUBLIC_USER);
    expect(client.get).toBeCalledWith("/users/foo");
  });

  it("Get Current User's Profile", async () => {
    ClientMock.prototype.get.mockResolvedValue(PRIVATE_USER);

    const res = await users.getCurrentUser();

    expect(res).toEqual(PRIVATE_USER);
    expect(client.get).toBeCalledWith("/me");
  });
});
