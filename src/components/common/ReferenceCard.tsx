/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ReferenceSource } from '../../types/project';
import { ExternalLink, BookOpen, AlertCircle } from 'lucide-react';

interface Props {
  reference: ReferenceSource;
}

export const ReferenceCard: React.FC<Props> = ({ reference }) => {
  const accessColor = {
    Free: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    Paid: 'bg-amber-50 text-amber-700 border-amber-200',
    Restricted: 'bg-rose-50 text-rose-700 border-rose-200',
    'Internal Standard': 'bg-slate-100 text-slate-700 border-slate-300'
  }[reference.access];

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-xs text-sm transition-colors hover:border-slate-300">
      <div className="flex items-start justify-between gap-3 mb-2">
        <div className="flex items-start gap-2.5">
          <BookOpen className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-slate-900 leading-snug">{reference.title}</h4>
            <p className="text-xs text-slate-500 font-medium">{reference.publisher}</p>
          </div>
        </div>
        <span className={`shrink-0 text-xs px-2 py-0.5 rounded font-mono font-medium border ${accessColor}`}>
          {reference.access}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 my-2.5 text-xs text-slate-600 bg-slate-50 p-2.5 rounded border border-slate-100">
        <div>
          <span className="font-semibold text-slate-700">Subject: </span>
          {reference.relevantSubject}
        </div>
        <div>
          <span className="font-semibold text-slate-700">Verified Date: </span>
          <span className="font-mono">{reference.dateChecked}</span>
        </div>
      </div>

      {reference.limitations && (
        <div className="flex items-start gap-1.5 text-xs text-slate-500 mt-2">
          <AlertCircle className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
          <span><strong className="text-slate-700">Applicability & Limitations:</strong> {reference.limitations}</span>
        </div>
      )}

      {reference.url && (
        <div className="mt-3 pt-2 border-t border-slate-100 flex justify-end">
          <a
            href={reference.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-medium text-slate-700 hover:text-slate-950 hover:underline"
          >
            <span>Standard Source Reference</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      )}
    </div>
  );
};
