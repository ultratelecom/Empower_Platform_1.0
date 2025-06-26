'use client';

import React, { useState } from 'react';
import { PeerSubmission } from '../../lib/mockPeerSubmissions';
import PeerFeedbackBox from './PeerFeedbackBox';

interface PeerSubmissionCardProps {
  submission: PeerSubmission;
}

export default function PeerSubmissionCard({ submission }: PeerSubmissionCardProps) {
  const [isReviewing, setIsReviewing] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getLessonTypeColor = (type: string) => {
    switch (type) {
      case 'breathing': return 'bg-blue-100 text-blue-700';
      case 'pitch': return 'bg-green-100 text-green-700';
      case 'tone': return 'bg-orange-100 text-orange-700';
      case 'rhythm': return 'bg-purple-100 text-purple-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'text-green-600';
      case 'intermediate': return 'text-yellow-600';
      case 'advanced': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-sm transition-shadow">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
            {submission.studentAvatar ? (
              <img 
                src={submission.studentAvatar} 
                alt={submission.studentName}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-purple-100">
                <span className="text-purple-600 font-medium text-sm">
                  {submission.studentName[0]}
                </span>
              </div>
            )}
          </div>
          <div>
            <h3 className="font-medium text-gray-900">{submission.studentName}</h3>
            <p className="text-sm text-gray-500">{submission.submittedAt}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <span className={`px-2 py-1 rounded text-xs font-medium ${getLessonTypeColor(submission.lessonType)}`}>
            {submission.lessonType}
          </span>
          <span className={`text-xs font-medium ${getDifficultyColor(submission.difficulty)}`}>
            {submission.difficulty}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="mb-4">
        <h4 className="font-medium text-gray-900 mb-2">{submission.lessonTitle}</h4>
        <p className="text-sm text-gray-600 leading-relaxed">{submission.description}</p>
      </div>

      {/* Audio Player */}
      <div className="bg-gray-50 rounded-lg p-4 mb-4">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-10 h-10 bg-purple-600 hover:bg-purple-700 rounded-full flex items-center justify-center transition-colors"
          >
            <span className="text-white text-sm">
              {isPlaying ? '⏸' : '▶'}
            </span>
          </button>
          
          <div className="flex-1">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-purple-600 h-2 rounded-full" style={{ width: '30%' }}></div>
            </div>
          </div>
          
          <span className="text-xs text-gray-500">{formatDuration(submission.duration)}</span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 text-sm text-gray-500">
          <span>{submission.reviewsCount} review{submission.reviewsCount !== 1 ? 's' : ''}</span>
          {submission.isReviewedByCurrentUser && (
            <span className="text-purple-600">✓ You reviewed this</span>
          )}
        </div>

        {!submission.isReviewedByCurrentUser && (
          <button
            onClick={() => setIsReviewing(!isReviewing)}
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            {isReviewing ? 'Cancel' : 'Write Review'}
          </button>
        )}
      </div>

      {/* Review Form */}
      {isReviewing && (
        <div className="mt-6 pt-6 border-t border-gray-200">
          <PeerFeedbackBox 
            submissionId={submission.id}
            onSubmit={() => setIsReviewing(false)}
            onCancel={() => setIsReviewing(false)}
          />
        </div>
      )}
    </div>
  );
} 