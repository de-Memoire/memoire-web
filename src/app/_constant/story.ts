import type { Story } from './type/model';
import { UnionToTuple } from './type/util';

export const StoryType = {
  ESSAY: 'essay',
  QUOTE: 'quote',
} as const satisfies {
  [key in Uppercase<Story['type']>]: Lowercase<key>;
};
export type StoryType = (typeof StoryType)[keyof typeof StoryType];
export const StoryTypeList = Object.values(
  StoryType,
) as UnionToTuple<StoryType>;
