// sanity/sanity.client.ts

import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "t6caphan",
  dataset: "production",
  apiVersion: "2023-10-17",
  useCdn: false,
};

const client = createClient(config);

export default client;