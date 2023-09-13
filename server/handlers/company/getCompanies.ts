import { companiesCollection } from '../../lib/collections';

export default function getCompanies() {
  return companiesCollection.find().toArray();
}
