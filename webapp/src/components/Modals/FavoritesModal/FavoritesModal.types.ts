import { ModalProps } from 'decentraland-dapps/dist/providers/ModalProvider/ModalProvider.types'
import { AuthIdentity } from 'decentraland-crypto-fetch'

export type Metadata = {
  itemId: string
}

export type Props = Omit<ModalProps, 'metadata'> & {
  metadata: Metadata
  identity: AuthIdentity | undefined
}

export type MapStateProps = Pick<Props, 'identity'>

export type OwnProps = Pick<Props, 'metadata'>
