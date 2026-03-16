import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'
import {careerType} from "./careerType";
import {researchType} from "./researchType"; 
import { eventType } from "./eventType"; 
import { memberType } from './memberType'
import { internshipType } from "./internshipType"; 
import { volunteerType } from "./volunteerType"; 
import { partnerType } from "./partnerType"; 

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, careerType, eventType, internshipType, partnerType, postType, authorType, researchType, memberType, volunteerType],
}
