import Products from '../../components/Products'

export default function ShopPage() {
  return (
    <div className="flex flex-col gap-8 max-w-4xl items-stretch m-auto pt-24">
      <h1 className="text-8xl my-8 font-extrabold self-center text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">KÄLM</h1>
      <Products submitTarget='/shop/checkout' enabled={true} />    </div>
  )
}