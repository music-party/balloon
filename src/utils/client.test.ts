import fetch from "./fetch";
import Client from "./client";

jest.mock("./fetch");
const fetchMock = fetch as jest.MockedFn<typeof fetch>;
const client = new Client("token");

describe("Internal request helper", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe("GET", () => {
    it("without options", () => {
      client.get("foo");

      expect(fetchMock).toBeCalledTimes(1);
    });
  });
});
