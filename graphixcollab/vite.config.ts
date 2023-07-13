import { UserConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default {
	plugins: [tsconfigPaths()],
} satisfies UserConfig;