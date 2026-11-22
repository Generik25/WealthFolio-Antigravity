/**
 * Date and period formatting utilities
 */

export interface DetailedPeriodSpan {
  years: number;
  remainingDays: number;
  totalDays: number;
  durationText: string;     // e.g. "2 ani și 252 zile", "1 an și 10 zile", "180 zile"
  dateRangeStr: string;     // e.g. "15 ian. 2024 – 10 sep. 2026"
  startDateStr: string;
  endDateStr: string;
}

export function parseLocalDate(dateInput: string | Date): Date {
  if (dateInput instanceof Date) {
    return new Date(dateInput.getFullYear(), dateInput.getMonth(), dateInput.getDate());
  }
  const clean = dateInput.split('T')[0];
  const parts = clean.split('-');
  return new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
}

/**
 * Calculates the exact duration (full years, remaining days, total days)
 * and formatted date interval string between two dates.
 */
export function getDetailedPeriodSpan(startDateInput: string | Date, endDateInput: string | Date): DetailedPeriodSpan | null {
  const start = parseLocalDate(startDateInput);
  const end = parseLocalDate(endDateInput);
  if (isNaN(start.getTime()) || isNaN(end.getTime()) || end < start) {
    return null;
  }

  const msPerDay = 1000 * 60 * 60 * 24;
  const totalDays = Math.round((end.getTime() - start.getTime()) / msPerDay);
  
  let years = end.getFullYear() - start.getFullYear();
  let tempDate = new Date(start.getFullYear() + years, start.getMonth(), start.getDate());

  if (tempDate > end) {
    years--;
    tempDate = new Date(start.getFullYear() + years, start.getMonth(), start.getDate());
  }

  const remainingDays = Math.round((end.getTime() - tempDate.getTime()) / msPerDay);

  let durationText = '';
  if (years > 0) {
    const yearWord = years === 1 ? '1 an' : `${years} ani`;
    if (remainingDays > 0) {
      const dayWord = remainingDays === 1 ? '1 zi' : `${remainingDays} zile`;
      durationText = `${yearWord} și ${dayWord}`;
    } else {
      durationText = yearWord;
    }
  } else {
    durationText = totalDays === 1 ? '1 zi' : `${totalDays} zile`;
  }

  const startFormatted = start.toLocaleDateString('ro-RO', { day: 'numeric', month: 'short', year: 'numeric' });
  const endFormatted = end.toLocaleDateString('ro-RO', { day: 'numeric', month: 'short', year: 'numeric' });
  const dateRangeStr = `${startFormatted} – ${endFormatted}`;

  const startDateStr = start.toISOString().split('T')[0];
  const endDateStr = end.toISOString().split('T')[0];

  return {
    years,
    remainingDays,
    totalDays,
    durationText,
    dateRangeStr,
    startDateStr,
    endDateStr
  };
}
