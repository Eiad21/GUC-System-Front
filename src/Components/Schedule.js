import React,{Component} from "react"   
import  './Navbar.css';

class Schedule extends Component {
render(){

return(
<div>

<br />
<div className="cd-schedule loading">
	<div className="timeline">
		<ul>
			<li><span>First</span></li>
			<li><span>09:30</span></li>
			<li><span>Second</span></li>
			<li><span>10:30</span></li>
			<li><span>Third</span></li>
			<li><span>11:30</span></li>
			<li><span>Fourth</span></li>
			<li><span>12:30</span></li>
			<li><span>Fifth</span></li>
			<li><span>13:30</span></li>

		</ul>
	</div>  

	<div className="events">
		<ul className="wrap">
			<li className="events-group">
				<div className="top-info"><span>Monday</span></div>
				<ul>
					<li className="single-event" data-start="09:30" data-end="10:30" data-content="event-abs-circuit" data-event="event-1">
						<a href="#0">
							<em class="event-name">Abs Circuit</em>
						</a>
					</li>

					<li className="single-event" data-start="11:00" data-end="12:30" data-content="event-rowing-workout" data-event="event-2">
						<a href="#0">
							<em className="event-name">Rowing Workout</em>
						</a>
					</li>

					<li className="single-event" data-start="14:00" data-end="15:15"  data-content="event-yoga-1" data-event="event-3">
						<a href="#0">
							<em className="event-name">Yoga Level 1</em>
						</a>
					</li>
				</ul>
			</li>

			<li className="events-group">
				<div className="top-info"><span>Tuesday</span></div>

				<ul>
					<li className="single-event" data-start="10:00" data-end="11:00"  data-content="event-rowing-workout" data-event="event-2">
						<a href="#0">
							<em className="event-name">Rowing Workout</em>
						</a>
					</li>

					<li className="single-event" data-start="11:30" data-end="13:00"  data-content="event-restorative-yoga" data-event="event-4">
						<a href="#0">
							<em className="event-name">Restorative Yoga</em>
						</a>
					</li>

					<li className="single-event" data-start="13:30" data-end="15:00" data-content="event-abs-circuit" data-event="event-1">
						<a href="#0">
							<em className="event-name">Abs Circuit</em>
						</a>
					</li>

					<li className="single-event" data-start="15:45" data-end="16:45"  data-content="event-yoga-1" data-event="event-3">
						<a href="#0">
							<em className="event-name">Yoga Level 1</em>
						</a>
					</li>
				</ul>
			</li>

			<li className="events-group">
				<div className="top-info"><span>Wednesday</span></div>

				<ul>
					<li className="single-event" data-start="09:00" data-end="10:15" data-content="event-restorative-yoga" data-event="event-4">
						<a href="#0">
							<em class="event-name">Restorative Yoga</em>
						</a>
					</li>

					<li className="single-event" data-start="10:45" data-end="11:45" data-content="event-yoga-1" data-event="event-3">
						<a href="#0">
							<em class="event-name">Yoga Level 1</em>
						</a>
					</li>

					<li className="single-event" data-start="12:00" data-end="13:45"  data-content="event-rowing-workout" data-event="event-2">
						<a href="#0">
							<em className="event-name">Rowing Workout</em>
						</a>
					</li>

					<li className="single-event" data-start="13:45" data-end="15:00" data-content="event-yoga-1" data-event="event-3">
						<a href="#0">
							<em className="event-name">Yoga Level 1</em>
						</a>
					</li>
				</ul>
			</li>

			<li className="events-group">
				<div className="top-info"><span>Thursday</span></div>

				<ul>
					<li className="single-event" data-start="09:30" data-end="10:30" data-content="event-abs-circuit" data-event="event-1">
						<a href="#0">
							<em className="event-name">Abs Circuit</em>
						</a>
					</li>

					<li className="single-event" data-start="12:00" data-end="13:45" data-content="event-restorative-yoga" data-event="event-4">
						<a href="#0">
							<em className="event-name">Restorative Yoga</em>
						</a>
					</li>

					<li className="single-event" data-start="15:30" data-end="16:30" data-content="event-abs-circuit" data-event="event-1">
						<a href="#0">
							<em className="event-name">Abs Circuit</em>
						</a>
					</li>

					<li className="single-event" data-start="17:00" data-end="18:30"  data-content="event-rowing-workout" data-event="event-2">
						<a href="#0">
							<em className="event-name">Rowing Workout</em>
						</a>
					</li>
				</ul>
			</li>

			<li className="events-group">
				<div className="top-info"><span>Friday</span></div>

				<ul>
					<li className="single-event" data-start="10:00" data-end="11:00"  data-content="event-rowing-workout" data-event="event-2">
						<a href="#0">
							<em class="event-name">Rowing Workout</em>
						</a>
					</li>

					<li className="single-event" data-start="12:30" data-end="14:00" data-content="event-abs-circuit" data-event="event-1">
						<a href="#0">
							<em className="event-name">Abs Circuit</em>
						</a>
					</li>

					<li className="single-event" data-start="15:45" data-end="16:45"  data-content="event-yoga-1" data-event="event-3">
						<a href="#0">
							<em className="event-name">Yoga Level 1</em>
						</a>
					</li>
				</ul>
			</li>
     
      <li className="events-group">
				<div className="top-info"><span>Saturday</span></div>
				<ul>
					<li className="single-event" data-start="09:30" data-end="10:30" data-content="event-abs-circuit" data-event="event-1">
						<a href="#0">
							<em className="event-name">Abs Circuit</em>
						</a>
					</li>

					<li className="single-event" data-start="11:00" data-end="12:30" data-content="event-rowing-workout" data-event="event-2">
						<a href="#0">
							<em className="event-name">Rowing Workout</em>
						</a>
					</li>

					<li className="single-event" data-start="14:00" data-end="15:15"  data-content="event-yoga-1" data-event="event-3">
						<a href="#0">
							<em className="event-name">Yoga Level 1</em>
						</a>
					</li>
				</ul>
			</li>

      <li className="events-group">
				<div className="top-info"><span>Sunday</span></div>
				<ul>
					<li className="single-event" data-start="09:30" data-end="10:30" data-content="event-abs-circuit" data-event="event-1">
						<a href="#0">
							<em className="event-name">Abs Circuit</em>
						</a>
					</li>

					<li className="single-event" data-start="11:00" data-end="12:30" data-content="event-rowing-workout" data-event="event-2">
						<a href="#0">
							<em className="event-name">Rowing Workout</em>
						</a>
					</li>

					<li className="single-event" data-start="14:00" data-end="15:15"  data-content="event-yoga-1" data-event="event-3">
						<a href="#0">
							<em className="event-name">Yoga Level 1</em>
						</a>
					</li>
				</ul>
			</li>

		</ul>
	</div>

	<div className="event-modal">
		<header className="header">
			<div className="content">
				<span className="event-date"></span>
				<h3 className="event-name"></h3>
			</div>

			<div className="header-bg"></div>
		</header>

		<div className="body">
			<div className="event-info"></div>
			<div className="body-bg"></div>
		</div>

		<a href="#0" className="close">Close</a>
	</div>

	<div className="cover-layer"></div>
</div> 




</div>
)
                
}}
export default Schedule 