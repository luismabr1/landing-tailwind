import React from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const Recomended = () => {
	const { ref: magicSectionRef, inView: magicSectionIsVisible } = useInView();
    return (
        <>
            <div className={`p-6 ${magicSectionIsVisible ? `motion-safe:animate-fadeIn` : ''}`} id="recomendados"  ref={magicSectionRef}>
				<p className="text-3xl font-semibold text-principal dark:text-white" >Recomendados</p>
				<div className="w-auto h-80 lg:h-80 items-center mt-6 overflow-x-auto scrollbar-hide flex space-x-4 lg:space-x-6 ">
					<div className="Card">
						<div  className="w-full h-3/5 rounded-t-lg bg-yosemite bg-cover">
						 {/*   */}
						</div>

						<div className="bg-secondary h-2/5 rounded-b-lg dark:bg-gray-700 ">
							<p className="text-xl px-4 py-2 font-semibold text-white">Yosemite</p>
							<p className="text-sm px-4 overflow-ellipsis pr-2 text-white">Un respiro del mundo</p>
						</div>
					</div>
					<div className="Card">
						<div id="image-container" className="w-full h-3/5 rounded-t-lg bg-new_york bg-cover"></div>
						<div className=" h-2/5 rounded-b-lg dark:bg-gray-800 ">
							<p className="text-xl px-4 py-2 font-semibold text-tertiary dark:text-white">New York</p>
							<p className="text-sm px-4 overflow-ellipsis pr-2 text-tertiary dark:text-white">Gran ciudad, explora ahora!</p>
						</div>
					</div>
					<div className="Card">
						<div id="image-container" className="w-full h-3/5 rounded-t-lg bg-norway bg-cover"></div>
						<div className=" bg-secondary h-2/5 rounded-b-lg dark:bg-gray-700 ">
							<p className="text-xl px-4 py-2 font-semibold text-white">Norway</p>
							<p className="text-sm px-4 overflow-ellipsis pr-2 text-white">Conoce nuevos lugares</p>
						</div>
					</div>
					<div className="Card">
						<div id="image-container" className="w-full h-3/5 rounded-t-lg bg-seattle bg-cover"></div>
						<div className="h-2/5 rounded-b-lg dark:bg-gray-800">
							<p className="text-xl px-4 py-2 font-semibold text-tertiary dark:text-white">Seattle</p>
							<p className="text-sm px-4 overflow-ellipsis pr-2 text-tertiary dark:text-white">Una ciudad para disfrutar al máximo</p>
						</div>
					</div>
					<div className="Card">
						<div id="image-container" className="w-full h-3/5 rounded-t-lg bg-switzerland bg-cover"></div>
						<div className="bg-secondary h-2/5 rounded-b-lg dark:bg-gray-700">
							<p className="text-xl px-4 py-2 font-semibold text-white">Switzerland</p>
							<p className="text-sm px-4 overflow-ellipsis pr-2 text-white">El mejor chocolate caliente que probarás</p>
						</div>
					</div>
					<div className="Card">
						<div id="image-container" className="w-full h-3/5 rounded-t-lg bg-sydney bg-center bg-cover"></div>
						<div className=" h-2/5 rounded-b-lg dark:bg-gray-800 ">
							<p className="text-xl px-4 py-2 font-semibold text-tertiary dark:text-white">Sydney</p>
							<p className="text-sm px-4 overflow-ellipsis pr-2 text-tertiary dark:text-white">Conoce la famosísima Opera</p>
						</div>
					</div>
					<div className="Card">
						<div id="image-container" className="w-full h-3/5 rounded-t-lg bg-europe bg-center bg-cover"></div>
						<div className="bg-secondary h-2/5 rounded-b-lg dark:bg-gray-700 ">
							<p className="text-xl px-4 py-2 font-semibold text-white">Edinburgh</p>
							<p className="text-sm px-4 overflow-ellipsis pr-2 text-white">Castillos y tiempos medievales</p>
						</div>
					</div>
					<div className="Card">
						<div id="image-container" className="w-full h-3/5 rounded-t-lg bg-europe bg-center bg-cover"></div>
						<div className="bg-secondary h-2/5 rounded-b-lg dark:bg-gray-800 ">
							<p className="text-xl px-4 py-2 font-semibold text-white dark:text-white">Edinburgh</p>
							<p className="text-sm px-4 overflow-ellipsis pr-2 text-white dark:text-white">Castillos y tiempos medievales</p>
						</div>
					</div>
				</div>
			</div>
        </>
    );
};

export default Recomended;