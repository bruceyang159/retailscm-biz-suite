import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}retailStoreOpeningManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}retailStoreOpeningManager/loadRetailStoreOpening/${targetObjectId}/${parametersExpr}/`,
  })
}







const addRetailStore = (targetObjectId, parameters) => {
  const url = `${PREFIX}retailStoreOpeningManager/addRetailStore/retailStoreOpeningId/name/telephone/owner/retailStoreCountryCenterId/cityServiceCenterId/founded/latitude/longitude/description/tokensExpr/`
  const retailStoreOpeningId = targetObjectId
  const requestParameters = { ...parameters, retailStoreOpeningId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateRetailStore = (targetObjectId, parameters) => {
  const url = `${PREFIX}retailStoreOpeningManager/updateRetailStoreProperties/retailStoreOpeningId/id/name/telephone/owner/founded/latitude/longitude/description/tokensExpr/`
  const retailStoreOpeningId = targetObjectId
  const requestParameters = { ...parameters, retailStoreOpeningId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeRetailStoreList = (targetObjectId, parameters) => {
  const url = `${PREFIX}retailStoreOpeningManager/removeRetailStoreList/retailStoreOpeningId/retailStoreIds/tokensExpr/`
  const requestParameters = { ...parameters, retailStoreOpeningId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const RetailStoreOpeningService = { view,
  load,
  addRetailStore,
  updateRetailStore,
  removeRetailStoreList }
export default RetailStoreOpeningService

