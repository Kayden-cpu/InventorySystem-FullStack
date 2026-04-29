import Image from 'next/image';

export default function ProductCard() {
    return (
        <article className="group flex flex-col max-w-70 overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg">
            
            <div className="border-b border-stone-200 bg-stone-100 p-4">
                <div className="relative mx-auto flex h-36 w-full items-center justify-center rounded-lg bg-white">
                    <Image
                        src="https://placehold.co/600x400/png"
                        alt="Product Description"
                        width={180}
                        height={120}
                    />
                </div>
            </div>

            <div className="flex flex-col gap-4 p-4">
                
                <div className="flex justify-between">
                    <div className="flex flex-col">
                        <p className="text-sm font-light uppercase tracking-wide text-stone-500">
                            Product
                        </p>

                        <h3 className="text-2xl font-bold text-stone-900">
                            Name
                        </h3>
                    </div>

                    <p className="h-fit rounded-md bg-stone-100 px-2 py-1 text-sm font-bold text-stone-700">
                        $Free.99
                    </p>
                </div>

                <p className="text-sm leading-6 text-stone-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                </p>

                <div className="flex items-center justify-between rounded-lg bg-stone-50 px-3 py-2 text-sm">
                    <span className="font-medium text-stone-900">
                        Availability
                    </span>

                    <span className="text-stone-600">
                        Online
                    </span>
                </div>

                {/* Hover Buttons */}
                <div className="flex max-h-0 flex-col gap-2 overflow-hidden opacity-0 transition-all duration-300 group-hover:max-h-60 group-hover:opacity-100">
                    
                    <button className="rounded-lg bg-stone-900 py-3 font-semibold text-white transition hover:bg-stone-800">
                        Buy Now
                    </button>

                    <button className="rounded-lg border border-stone-300 bg-white py-3 font-semibold text-stone-900 transition hover:bg-stone-100">
                        Add to Cart
                    </button>

                    <button className="rounded-lg border border-stone-200 bg-stone-100 py-3 font-semibold text-stone-700 transition hover:bg-stone-200">
                        Add to Wishlist
                    </button>
                </div>

            </div>
        </article>
    );
}