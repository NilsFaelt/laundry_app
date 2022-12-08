export interface Info {
  editable: boolean;
  removeable: boolean;
  mustbeseen: boolean;
  alwaysreminder: boolean;
}

export interface ThreadType {
  title: string;
  creator: string;
  info?: Info;
}
