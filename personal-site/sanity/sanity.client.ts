// sanity/sanity.client.ts

import { createClient, type ClientConfig } from "@sanity/client";
import { dataset, projectId } from "./env";

const config: ClientConfig = {
  projectId: projectId,
  dataset: dataset,
  apiVersion: "2023-11-25",
  useCdn: false,
};

const client = createClient(config);

export default client;