import { connect } from 'react-redux'
import { isLoadingType } from 'decentraland-dapps/dist/modules/loading/selectors'
import { cancelOrderRequest, CANCEL_ORDER_REQUEST } from '../../modules/order/actions'
import { getLoading } from '../../modules/order/selectors'
import { RootState } from '../../modules/reducer'
import CancelSalePage from './CancelSalePage'
import { MapStateProps, MapDispatchProps, MapDispatch } from './CancelSalePage.types'

const mapState = (state: RootState): MapStateProps => ({
  isLoading: isLoadingType(getLoading(state), CANCEL_ORDER_REQUEST)
})

const mapDispatch = (dispatch: MapDispatch): MapDispatchProps => ({
  onCancelOrder: (order, nft) => dispatch(cancelOrderRequest(order, nft))
})

export default connect(mapState, mapDispatch)(CancelSalePage)
