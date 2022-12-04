/* eslint-disable import/prefer-default-export */
interface INoteProps {
  id: string;
  note: string;
  index: number;
  tags?: Array<ITag>;
  switchForm?: () => void;
}

interface INote {
  id: string;
  note: string;
  tags: Array<ITag>;
}

interface ITag {
  id: string;
  tag: string;
}

export type { INoteProps, INote, ITag };
