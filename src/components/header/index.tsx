import { useState } from "react"
import logo from "../../assets/Picture2.png"

const HEADER_LINKS: any = [
	{
		linkName: "Home",
		pathName: "",
		isActive: true
	},
	{
		linkName: "Lessons",
		pathName: "",
		isActive: false
	},
	{
		linkName: "Credits",
		pathName: "",
		isActive: false
	}
]

const Header = () => {

	const buildHeaderLinks = () => {
		if (HEADER_LINKS) {
			return (
				HEADER_LINKS.map((item: any, index: number) => (
					<div className="flex flex-col" key={index}>
						<li key={index}>
							<a className={`${item.isActive ? "text-[#E3664F] font-bold" : "text-gray-700"} font-poppins`} href={`${item.pathName}`}>{item.linkName}</a>
						</li>
						<div className={`${item.isActive ? "bg-[#E3664F]" : "bg-transparent"} h-[3px] w-full`}></div>
					</div>
				))
			)
		}
		return <></>
	}

	return (
		<div className="w-full h-[70px] px-8 flex items-center justify-between">
			<div className="w-[60px] h-[60px] rounded-full flex items-center" >
				<img src={logo} className="h-full w-full" />
				<p className="font-bold font-poppins text-gray-600 whitespace-nowrap">YUHOM / LJOR</p>
			</div>
			<ul className="flex gap-10 h-full items-center">
				{buildHeaderLinks()}
			</ul>
		</div>
	)
}

export default Header