import Essentials from './components/essentials.jsx';
import ImageHeader from './components/image-header.jsx';
import Paragraph from './components/paragraph.jsx';
import SectionHeader from './components/park-review-header.jsx';
import MainTextDiv from './components/main-text-div.jsx';

export default function App(){
	return (
		<>
		<div className="p-8 flex justify-center bg-linear-14 from-sky-900 to-slate-900">
		<div className="flex justify-center border-1 min-h-screen w-3/4 rounded-lg border-1 p-1 border-emerald-500 bg-cyan-900">
		<div className="bg-linear-to-r from-blue-500 to-cyan-800 text-white p-8 rounded-lg border-1 border-emerald-500">
		<a className="group relative block rounded-full w-64 h-64 block border-emerald-800 bg-linear-14 from-sky-900 to-slate-900 transition-all hover:border-emerald-500 hover:shadow-2xl hover:shadow-emerald-500/20 active:scale-95 active:duration-75" href="https://linkedin.com/in/jsharpexyz" target="_blank">
		<img src="/images/pfp.jpg" alt="Jonathan" className="p-1 w-64 h-64 rounded-full object-cover border-1 border-emerald-800 group-hover:brightness-110 group-hover:contrast-110" />
		<div className="font-azeret absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
		<span className="text-white font-bold border-2 border-white px-4 py-2 rounded-lg uppercase">
		view linkedin ↗
		</span>
		</div>
		</a>
		<div className="px-5 mb-4">
		<SectionHeader>Hello!</SectionHeader>
		<Paragraph>
		I'm Jonathan. I am a growing developer in the Seattle area. I attended Seattle Pacific University and graduated with a degree in computer science. While not currently paid to do so, I am always working on improving my programming skills to set myself up for a future opportunity. Here are some of the things I've been working on.
		</Paragraph>
		</div>
		<hr className="my-2 border-emerald-500"/>
		<div className="flex items-center">
		<Paragraph variant="wide">
		<SectionHeader>Sharpe's Hit List</SectionHeader>
		This is the project I've put the most time into. I'm a big baseball fan, so it's my way of documenting all stadiums I've visited and the games I've attended. I continue to maintain this and have some big plans for it in the future.</Paragraph>
		<a className="group relative block w-1/4 border border-1 rounded-md p-1 border-emerald-800 bg-linear-14 from-sky-900 to-slate-900 my-2 font-dmsans transition-all hover:border-emerald-500 hover:shadow-2xl hover:shadow-emerald-500/20 active:scale-95 active:duration-75" href="https://baseball.jsharpe.xyz" target="_blank">
		<img className="border rounded-md border-emerald-800 group-hover:brightness-110 group-hover:contrast-110" src="images/T-Mobile Park.jpg"/>
		<div className="font-azeret absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
		<span className="text-white font-bold border-2 border-white px-4 py-2 rounded-lg uppercase">
		view project ↗
		</span>
		</div>
		</a>
		</div>
		<hr className="my-2 border-emerald-500"/>
		<div className="flex items-center">
		<a className="group relative block w-1/4 border border-1 rounded-md p-1 border-emerald-800 bg-linear-14 from-sky-900 to-slate-900 my-2 font-dmsans transition-all hover:border-emerald-500 hover:shadow-2xl hover:shadow-emerald-500/20 active:scale-95 active:duration-75" href="https://youtu.be/aMFmd9eoO_I" target="_blank">
		<img className="border rounded-md border-emerald-500 w-full" src="./images/icons8-graduation-48.png" alt="Image coming soon!"/>
		<div className="font-azeret absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
		<span className="text-white font-bold border-2 border-white px-4 py-2 rounded-lg uppercase">
		view demo ↗
		</span>
		</div>
		</a>
		<Paragraph variant="wide">
		<SectionHeader>Graduation Planning App (GPA)</SectionHeader>
		In my final year of college, I teamed up with 5 other students to create a web app that could replace our university's existing course registration and course planning website. The existing system was difficult to navigate and understand what courses were required for what degrees, resulting in many meetings with academic advisors simply to figure out what class needed to be taken next. This project aimed to streamline all parts of registration. The four parts of the site included the course catalog, suggested course sequences for each major, course planning, and the course registration itself. It was a difficult projet but we won an award at our end-of-year Erickson Conference for our efforts. The page is no longer live but I did record a bit of a video demonstrating its use.</Paragraph>
		</div>
		<hr className="my-2 border-emerald-500"/>
		<div className="flex items-center">
		<Paragraph variant="wide">
		<SectionHeader>Linux Dotfiles</SectionHeader>
		I have daily-driven Linux for 5 years now. While sometimes I go through dry spells, I am usually tweaking something in my setup (Linux is great for tinkering!) Right now it's not at all in a state where someone could just download them for use but they're there if you want to look at them.</Paragraph>
		<a className="group relative block w-1/4 border border-1 rounded-md p-1 border-emerald-800 bg-linear-14 from-sky-900 to-slate-900 my-2 font-dmsans transition-all hover:border-emerald-500 hover:shadow-2xl hover:shadow-emerald-500/20 active:scale-95 active:duration-75" href="https://github.com/jonathansharpe/jsharpe-dotfiles" target="_blank">
		<img className="border rounded-md border-emerald-500" src="./images/endeavour.png"/>
		<div className="font-azeret absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
		<span className="text-white font-bold border-2 border-white px-4 py-2 rounded-lg uppercase">
		view github ↗
		</span>
		</div>
		</a>
		</div>
		<hr className="my-2 border-emerald-500"/>
		<div className="flex items-center">
		<a className="group relative block w-1/4 border border-1 rounded-md p-1 border-emerald-800 bg-linear-14 from-sky-900 to-slate-900 my-2 font-dmsans transition-all hover:border-emerald-500 hover:shadow-2xl hover:shadow-emerald-500/20 active:scale-95 active:duration-75" href="https://github.com/jonathansharpe/createbuildingwands" target="_blank">
		<img className="border rounded-md border-emerald-500 w-full" src="./images/icons8-wand-96.png"/>
		<div className="font-azeret absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
		<span className="text-white font-bold border-2 border-white px-4 py-2 rounded-lg uppercase">
		view github ↗
		</span>
		</div>
		</a>
		<Paragraph variant="wide">

		<SectionHeader>Create: Building Wands</SectionHeader>
		This is supposed to be the best building wand mod I could never find. The Create mod is what made me fall in love with playing modded Minecraft, especially with all the copycat blocks present, if you include the Create: Copycats+ addon. Copycat blocks offer more block shapes to improve detailing by applying a texture from any other block to its texture. For example, a copycat slab with a grass block texture. I have yet to find a wand mod that allows for mass block placement using those systems. I began development but it is currently on hiatus, I hope to return to it at some point.</Paragraph>

		</div>
		<footer className="mt-auto pt-4 text-white text-sm font-dmsans">
		&copy; {new Date().getFullYear()} Jonathan Sharpe
		</footer>
		</div>
		</div>
		</div>
		</>
	)
}
