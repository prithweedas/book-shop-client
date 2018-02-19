export interface IItem {
  sold: boolean;
  _id: string;
  name: string;
  publishYear: number;
  price: number;
  author: string;
  description: string;
  owner: IOwner;
  image: string;
  createdAt: number;
}

export interface IOwner {
  _id: string;
  name: string;
  college: string;
  email: string;
  passingYear: string;
}
