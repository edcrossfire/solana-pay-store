import { useWallet } from '@solana/wallet-adapter-react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import CouponBook from '../components/CouponBook'
import Products from '../components/Products'

export default function HomePage() {

  const { publicKey } = useWallet()

  return (
    <div className="flex flex-col gap-8 max-w-4xl items-stretch m-auto pt-24">
      <h1 className="text-8xl my-8 font-extrabold self-center text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">KÄLM</h1>
      {/* We add the Solana wallet connect button */}
      <div className="basis-1/4">
        <WalletMultiButton className='!bg-gray-900 hover:scale-105' />
      </div>

      {/* We display the coupon book if there's a connected wallet */}
      {publicKey && <CouponBook />}

      {/* We disable checking out without a connected wallet */}
      {/* Also the submitTarget is /buy/transaction instead of /checkout */}
      <Products submitTarget='/checkout' enabled={publicKey !== null} />
    </div>
  )
}