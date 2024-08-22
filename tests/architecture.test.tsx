import "tsarch/dist/jest";
import { describe } from "@jest/globals";
import { filesOfProject } from "tsarch";

describe("architecture", () => {
    jest.setTimeout(60000);

    it("ccquisition ne doit pas dépendre de suivi", async () => {
        const rule = filesOfProject()
            .inFolder("src/acquisition")
            .shouldNot()
            .dependOnFiles()
            .inFolder("src/suivi");

        expect(rule).toPassAsync();
    });

    it("suivi ne doit pas dépendre de acquisition", async () => {
        const rule = filesOfProject()
            .inFolder("src/suivi")
            .shouldNot()
            .dependOnFiles()
            .inFolder("src/acquisition");

        expect(rule).toPassAsync();
    });
});
