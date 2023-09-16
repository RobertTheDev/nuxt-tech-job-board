import { ObjectId } from 'mongodb';
import { companiesCollection } from '../../lib/mongoDBCollections';

export default function deleteCompanyById(id: string) {
  // Delete company by its id.

  return companiesCollection.findOneAndDelete({
    _id: new ObjectId(id),
  });
}
