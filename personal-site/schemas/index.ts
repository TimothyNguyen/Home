// schemas/index.ts

import gridItem from "./gridItem";
import gridItemLayout from "./gridItemLayout";
import GridItemType from "./gridItemType";
import profile from "./singletons/profile";

export const schemaTypes = [profile, gridItem, gridItemLayout, GridItemType];