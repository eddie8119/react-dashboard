import {afterEach, vi} from "vitest";
import {cleanup} from "@testing-library/react";
import "@testing-library/jest-dom";
import { server } from "./mocks/server";

beforeAll(() => server.listen());
afterEach(() => {
    cleanup();
    vi.clearAllMocks();
    server.resetHandlers();
});
afterAll(() => server.close());