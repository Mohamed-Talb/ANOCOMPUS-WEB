
export type Person = {
  type: string;
  Firstname: string;
  LastName: string;
};

export type Attachment = {
  name: string;
  url: string;
  type: string;
};

export type Report = {
  ReportFrom: Person;
  ReportTo: Person;
  Title: string;
  Description: string;
  Location: string;
  Priority: string;
  Status: string;
  Categorie: string;
  Date: string;
  Attachments: Attachment[];
  Related: Report[];
};
