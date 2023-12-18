import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { dts } from "rollup-plugin-dts";
import json from "@rollup/plugin-json";

export default [
    {
        input: "index.ts",
        output: [
            {
                file: "index.js",
                format: "cjs",
                sourcemap: true,
            },
            {
                file: "./dist/index.esm.js",
                format: "esm",
                sourcemap: true,
            },
        ],
        plugins: [
            resolve(),
            commonjs(),
            json(),
            typescript({ tsconfig: "./tsconfig.json" }),
        ],
        external: ["react", "react-dom"],
    },
    {
        input: "dist/types/index.d.ts",
        output: [{ file: "dist/index.d.ts", format: "esm" }],
        plugins: [dts()],
        external: ["react", "react-dom"],
    },
];