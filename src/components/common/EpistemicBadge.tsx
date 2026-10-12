/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { EpistemicStatus } from '../../types/project';

interface Props {
  status: EpistemicStatus;
  size?: 'sm' | 'md';
  showLabelOnly?: boolean;
}

export const EpistemicBadge: React.FC<Props> = ({ status, size = 'md' }) => {
  const config = {
    verified_fact: {
      label: 'Verified Fact',
      bg: 'bg-emerald-50 text-emerald-800 border-emerald-300 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-800',
      dot: 'bg-emerald-600',
      description: 'Supported by verified technical standards, statutory regulations, or verified manufacturer documentation.'
    },
    planning_assumption: {
      label: 'Planning Assumption',
      bg: 'bg-blue-50 text-blue-800 border-blue-300 dark:bg-blue-950/60 dark:text-blue-300 dark:border-blue-800',
      dot: 'bg-blue-600',
      description: 'Engineering assumption formulated for this project scope; subject to site verification and contractor alignment.'
    },
    proposed_decision: {
      label: 'Proposed Decision',
      bg: 'bg-amber-50 text-amber-900 border-amber-300 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-800',
      dot: 'bg-amber-600',
      description: 'Recommended engineering or planning choice that requires formal employer or authority sign-off.'
    },
    learning_example: {
      label: 'Learning Example',
      bg: 'bg-purple-50 text-purple-800 border-purple-300 dark:bg-purple-950/60 dark:text-purple-300 dark:border-purple-800',
      dot: 'bg-purple-600',
      description: 'Illustrative technical model used to demonstrate industry practices and project controls.'
    }
  }[status];

  const sizeClasses = size === 'sm' 
    ? 'text-xs px-2 py-0.5' 
    : 'text-xs px-2.5 py-1 font-medium';

  return (
    <span
      title={config.description}
      className={`inline-flex items-center gap-1.5 rounded border ${config.bg} ${sizeClasses} tracking-tight select-none`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${config.dot}`} />
      <span>[{config.label}]</span>
    </span>
  );
};
