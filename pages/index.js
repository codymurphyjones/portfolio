import { Label } from 'semantic-ui-react'
import PieChart from 'react-minimal-pie-chart';

function Index(props) {
	return <div>
				<Label as='a' color='blue' image>
					<img src='https://react.semantic-ui.com/images/avatar/small/veronika.jpg' />
					Veronika
					<Label.Detail>Friend</Label.Detail>
				</Label>
				<Label as='a' color='teal' image>
					<img src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
					Veronika
					<Label.Detail>Friend</Label.Detail>
				</Label>
				<Label as='a' color='yellow' image>
					<img src='https://react.semantic-ui.com/images/avatar/small/christian.jpg' />
					Helen
					<Label.Detail>Co-worker</Label.Detail>
					</Label>
					
					<PieChart
						data={[
							{ title: 'One', value: 10, color: '#E38627' },
							{ title: 'Two', value: 15, color: '#C13C37' },
							{ title: 'Three', value: 20, color: '#6A2135' },
						]}
					/>
			</div>
}


export default Index;