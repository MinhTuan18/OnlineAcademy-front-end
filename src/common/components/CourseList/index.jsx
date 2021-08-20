import PropTypes from 'prop-types';
import TeachingCourseCard from '../TeachingCourseCard'
// import { Scrollbar } from './scrollbar';

const CourseList = (props) => {
  const { courses } = props;

  return (
    <div>
      {courses.length > 0 ? (
        courses.map((course) => {
          return (
            <TeachingCourseCard key={course.createdCourse._id} course={course.createdCourse}/>
          );
        })
      ) : null}
    </div>
  );
};

CourseList.propTypes = {
  courses: PropTypes.array,
};

export default CourseList;
