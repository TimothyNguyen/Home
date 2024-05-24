// schemas/index.ts

import gridItem from "./gridItem";
import gridItemLayout from "./gridItemLayout";
import GridItemType from "./gridItemType";
import profile from "./singletons/profile";
import timeline from "./timeline";
import milestone from "./milestone";
import duration from "./duration";

export const schemaTypes = [profile, gridItem, gridItemLayout, GridItemType, milestone, timeline, duration];