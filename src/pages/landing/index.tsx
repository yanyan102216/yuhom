import yuhom from "../../assets/yuhom.png"

const LandingPage = () => {
	return (
		<>
			<div className="w-full h-[80vh] bg-backG box-border mb-10">
				<div className="mt-[50px] w-full h-auto flex justify-center flex flex-col items-center">
					<img src={yuhom} className="w-[300px] h-[60px]" />
					<p className="font-poppins text-sm mt-10 w-[550px] text-center">LJOR Children's Ministry aims to be an avenue for the children to know, seek, love, and serve Jesus in their young age.</p>
					<button className="focus:outline-none focus:ring-0 z-[50px] h-[30px] w-[150px] rounded-2xl bg-[#F5A646] mt-10 flex items-center justify-center text-sm font-poppins font-semibold text-white cursor-pointer">
						Learn more
					</button>
				</div>
			</div>
			<div className="h-[130vh] w-full bg-white pt-10 border-box">
				<div className="bg-backGM h-full">
					<div className="w-full h-[80px] px-8">
						<div className="bg-[#FFECD6] h-full w-full flex items-center justify-center pb-3">
							<p className="font-poppins leading-none inline-block text-[17px] font-semibold">
								<span className="font-arco text-[50px] text-[#8FA8B7]">Y</span>oungsters
								<span className="font-arco text-[50px] text-[#F5A646]"> U</span>nhindered in
								<span className="font-arco text-[50px] text-[#E9B1A6]"> H</span>onoring and
								<span className="font-arco text-[50px] text-[#8FA8B7]"> O</span>beying their
								<span className="font-arco text-[50px] text-[#E3664F]"> M</span>aker
							</p>
						</div>
					</div>
					<div className="w-full h-[60px] mt-[50px] flex items-center gap-2 px-8">
						<div className="border-l-[#E3664F] border-l-[5px] h-full w-[10px]"></div>
						<p className="font-poppins text-[#E3664F] text-[50px] font-semibold">OUR MISSION</p>
					</div>
					<div className="w-[400px] h-[500px] float-right flex flex-col gap-10">
						<div className="flex flex-row gap-5">
							<div className="font-poppins min-w-[35px] h-[35px] rounded-full bg-[#E3664F] text-white font-semibold flex items-center justify-center">1</div>
							<p className="font-poppins">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mauris lacus, pharetra ac commodo sit amet, consectetur in purus.</p>
						</div>
						<div className="flex flex-row gap-5">
							<div className="font-poppins min-w-[35px] h-[35px] rounded-full bg-[#94B7B7] text-white font-semibold flex items-center justify-center">2</div>
							<p className="font-poppins">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mauris lacus, pharetra ac commodo sit amet, consectetur in purus.</p>
						</div>
						<div className="flex flex-row gap-5">
							<div className="font-poppins min-w-[35px] h-[35px] rounded-full bg-[#F5A646] text-white font-semibold flex items-center justify-center">3</div>
							<p className="font-poppins">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mauris lacus, pharetra ac commodo sit amet, consectetur in purus.</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default LandingPage