import Essentials from './components/essentials.jsx';
import ImageHeader from './components/image-header.jsx';
import Paragraph from './components/paragraph.jsx';
import SectionHeader from './components/park-review-header.jsx';
import MainTextDiv from './components/main-text-div.jsx';
// Use a reference to the image path directly instead of importing

export default function App(){
	return (
		<Essentials>
		<MainTextDiv>

		<SectionHeader>Hello!</SectionHeader>
		
		<Paragraph>
		I'm Jonathan. I am a growing developer in the Seattle area. I attended Seattle Pacific University and graduated with a degree in computer science. While not currently paid to do so, I am always working on improving my programming skills to set myself up for a future opportunity. Here are some of the things I've been working on.
		</Paragraph>

		<SectionHeader>Sharpe's Hit List</SectionHeader>
		<Paragraph>This is the project I've put the most time into. I'm a big baseball fan, so it's my way of documenting all stadiums I've visited and the games I've attended. I continue to maintain this and have some big plans for it in the future.</Paragraph>

		<SectionHeader>Graduation Planning App (GPA)</SectionHeader>
		<Paragraph>In my final year of college, I teamed up with 5 other students to create a web app that could replace our university's existing course registration and course planning website. The existing system was difficult to navigate and understand what courses were required for what degrees, resulting in many meetings with academic advisors simply to figure out what class needed to be taken next. This project aimed to streamline all parts of registration. The four parts of the site included the course catalog, suggested course sequences for each major, course planning, and the course registration itself. It was a difficult projet but we won an award at our end-of-year Erickson Conference for our efforts. The page is no longer live but I did record a bit of a video demonstrating its use.</Paragraph>

		<SectionHeader>Linux Dotfiles</SectionHeader>
		<Paragraph>I have daily-driven Linux for 5 years now. While sometimes I go through dry spells, I am usually tweaking something in my setup (Linux is great for tinkering!) Right now it's not at all in a state where someone could just download them for use but they're there if you want to look at them.</Paragraph>

		<SectionHeader>Create: Building Wands</SectionHeader>
		<Paragraph>This is supposed to be the best building wand mod I could never find. The Create mod is what made me fall in love with playing modded Minecraft, especially with all the copycat blocks present, if you include the Create: Copycats+ addon. Copycat blocks offer more block shapes to improve detailing by applying a texture from any other block to its texture. For example, a copycat slab with a grass block texture. I have yet to find a wand mod that allows for mass block placement using those systems. I began development but it is currently on hiatus, I hope to return to it at some point.</Paragraph>

		</MainTextDiv>
		</Essentials>
	)
}
