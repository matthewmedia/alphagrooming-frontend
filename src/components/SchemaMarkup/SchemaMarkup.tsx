import { Schema } from '@operationnation/sanity-plugin-schema-markup';
import { NextSchemaScript } from './components/NextSchemaScript';

type Props = {
  schema: Schema[];
};

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
export const SchemaMarkup = ({ schema } : Props)=> {
    return (
        <NextSchemaScript schema={schema} projectId={projectId as string} dataset={dataset as string}  />
    );
}