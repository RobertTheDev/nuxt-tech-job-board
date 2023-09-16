import { companiesCollection } from '../../lib/mongoDBCollections';

export default function deleteCompanies() {
  // Delete all companies.
  return companiesCollection.deleteMany();
}
