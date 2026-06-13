import { describe, it, expect } from "vitest";

describe("math", () => {
    it("should add two numbers", () => {
        expect(1 + 1).toBe(2);
    });
    it("should add two numbers", () => {
        expect(1 + 2).toBe(3);
    });
    it("should add two numbers", () => {
        expect(1 + 3).toBe(4);
    });
    it("should subtract two numbers", () => {
        expect(1 - 1).toBe(0);
    });
    it("should multiply two numbers", () => {
        expect(1 * 1).toBe(1);
    });
    it("should divide two numbers", () => {
        expect(1 / 1).toBe(1);
    });
    it("should modulo two numbers", () => {
        expect(1 % 1).toBe(0);
    });
    it("should power two numbers", () => {
        expect(1 ** 1).toBe(1);
    });
    it("should square root two numbers", () => {
        expect(Math.sqrt(1)).toBe(1);
    });
});