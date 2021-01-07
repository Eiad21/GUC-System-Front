import React from 'react'
import InstructorDash from './InstructorDash';

export default function MyCourses(props) {
    return (
          
                  <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
              <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
               
                
      
               {/* instructor only*/} 
                <div style={(true/*this.props.MemberRank=='instructor'*/)?{display: 'block'}:{display: 'none'}}>
                <InstructorDash>
          
                </InstructorDash>
                </div>
      
              </div>
            </div>
          </div>
    )
}
