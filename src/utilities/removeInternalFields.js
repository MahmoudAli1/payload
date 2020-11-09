const internalFields = ['_id', '__v', 'salt', 'hash'];

const removeInternalFields = (incomingDoc) => Object.entries(incomingDoc).reduce((newDoc, [key, val]) => {
  if (internalFields.indexOf(key) > -1) {
    return newDoc;
  }

  return {
    ...newDoc,
    [key]: val,
  };
}, {});

module.exports = removeInternalFields;
