import { useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

// Temporary data
const courseData = {
  id: 1,
  title: 'Complete Web Development Bootcamp',
  lessons: [
    {
      id: 1,
      title: 'Introduction to Web Development',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '10:30',
      isCompleted: true,
      resources: [
        { name: 'Lesson Slides', url: '#', type: 'pdf' },
        { name: 'Exercise Files', url: '#', type: 'zip' },
      ],
    },
    {
      id: 2,
      title: 'HTML Fundamentals',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '15:45',
      isCompleted: true,
      resources: [
        { name: 'HTML Cheat Sheet', url: '#', type: 'pdf' },
      ],
    },
    {
      id: 3,
      title: 'CSS Basics',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '20:15',
      isCompleted: false,
      resources: [],
    },
  ],
};

const CoursePlayer = () => {
  const { courseId } = useParams();
  const [searchParams] = useSearchParams();
  const lessonId = parseInt(searchParams.get('lesson')) || 1;

  const [activeLesson, setActiveLesson] = useState(
    courseData.lessons.find((lesson) => lesson.id === lessonId) || courseData.lessons[0]
  );
  const [activeTab, setActiveTab] = useState('notes');
  const [notes, setNotes] = useState('');
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleLessonComplete = () => {
    // TODO: Implement lesson completion logic
    console.log('Lesson marked as complete');
  };

  const handleSaveNotes = () => {
    // TODO: Implement notes saving logic
    console.log('Notes saved:', notes);
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    setComments([
      {
        id: Date.now(),
        text: newComment,
        user: 'John Doe',
        timestamp: new Date().toISOString(),
      },
      ...comments,
    ]);
    setNewComment('');
  };

  return (
    <div className="flex h-[calc(100vh-6rem)] -mt-4 -mx-8">
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Video Player */}
        <div className="relative w-full pt-[56.25%] bg-black">
          <iframe
            src={activeLesson.videoUrl}
            className="absolute top-0 left-0 w-full h-full"
            allowFullScreen
          />
        </div>

        {/* Lesson Info */}
        <div className="p-6 bg-white dark:bg-gray-800 flex-1 overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">{activeLesson.title}</h2>
            <button
              onClick={handleLessonComplete}
              className={`px-4 py-2 rounded-md ${activeLesson.isCompleted
                ? 'bg-green-600 hover:bg-green-700'
                : 'bg-blue-600 hover:bg-blue-700'
                } text-white transition-colors`}
            >
              {activeLesson.isCompleted ? 'Completed' : 'Mark as Complete'}
            </button>
          </div>

          {/* Resources */}
          {activeLesson.resources.length > 0 && (
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Resources</h3>
              <div className="flex gap-2">
                {activeLesson.resources.map((resource, index) => (
                  <a
                    key={index}
                    href={resource.url}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    download
                  >
                    {resource.name}
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Tabs */}
          <div className="border-b mb-6">
            <div className="flex gap-4">
              <button
                className={`pb-2 px-1 ${activeTab === 'notes'
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-600 dark:text-gray-400'
                  }`}
                onClick={() => setActiveTab('notes')}
              >
                Notes
              </button>
              <button
                className={`pb-2 px-1 ${activeTab === 'comments'
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-600 dark:text-gray-400'
                  }`}
                onClick={() => setActiveTab('comments')}
              >
                Comments
              </button>
            </div>
          </div>

          {/* Tab Content */}
          {activeTab === 'notes' ? (
            <div className="space-y-4">
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Take notes for this lesson..."
                className="w-full h-48 p-4 rounded-md bg-gray-50 dark:bg-gray-700 resize-none"
              />
              <button
                onClick={handleSaveNotes}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Save Notes
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              <form onSubmit={handleAddComment} className="space-y-4">
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Add a comment or question..."
                  className="w-full h-24 p-4 rounded-md bg-gray-50 dark:bg-gray-700 resize-none"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Post Comment
                </button>
              </form>

              <div className="space-y-4">
                {comments.map((comment) => (
                  <div
                    key={comment.id}
                    className="bg-gray-50 dark:bg-gray-700 rounded-md p-4"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-semibold">{comment.user}</span>
                      <span className="text-sm text-gray-500">
                        {new Date(comment.timestamp).toLocaleDateString()}
                      </span>
                    </div>
                    <p>{comment.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Sidebar */}
      <div className="w-80 bg-white dark:bg-gray-800 border-l dark:border-gray-700 overflow-y-auto">
        <div className="p-4">
          <h3 className="font-semibold mb-4">Course Content</h3>
          <div className="space-y-2">
            {courseData.lessons.map((lesson) => (
              <button
                key={lesson.id}
                onClick={() => setActiveLesson(lesson)}
                className={`w-full text-left p-3 rounded-md ${activeLesson.id === lesson.id
                  ? 'bg-blue-600 text-white'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
              >
                <div className="flex items-center justify-between">
                  <span className="flex-1">{lesson.title}</span>
                  <span className="text-sm">{lesson.duration}</span>
                </div>
                {lesson.isCompleted && (
                  <span className="text-sm text-green-500 dark:text-green-400">
                    ✓ Completed
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePlayer;