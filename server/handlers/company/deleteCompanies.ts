import { companiesCollection } from '../../lib/collections';

export default function deleteCompanies() {
  // Delete all companies.
  return companiesCollection.deleteMany();
}
