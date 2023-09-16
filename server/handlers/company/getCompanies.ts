import { companiesCollection } from '../../lib/mongoDBCollections';

export default function getCompanies() {
  return companiesCollection.find().toArray();
}
