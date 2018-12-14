// =============================================================================
// i18n
// =============================================================================

export interface Language {
  dayNames: string[]
  monthNames: string[]
  tokens: {
    [k: string]: RegExp
  }
}

const ENGLISH: Language = {
  dayNames: [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday',
    'Thursday', 'Friday', 'Saturday'
  ],
  monthNames: [
    'January', 'February', 'March', 'April', 'May',
    'June', 'July', 'August', 'September', 'October',
    'November', 'December'
  ],
  tokens: {
    'SKIP': /^[ \r\n\t]+|^\.$/,
    'number': /^[1-9][0-9]*/,
    'numberAsText': /^(one|two|three)/i,
    'every': /^every/i,
    'day(s)': /^days?/i,
    'weekday(s)': /^weekdays?/i,
    'week(s)': /^weeks?/i,
    'hour(s)': /^hours?/i,
    'minute(s)': /^minutes?/i,
    'month(s)': /^months?/i,
    'year(s)': /^years?/i,
    'on': /^(on|in)/i,
    'at': /^(at)/i,
    'the': /^the/i,
    'first': /^first/i,
    'second': /^second/i,
    'third': /^third/i,
    'nth': /^([1-9][0-9]*)(\.|th|nd|rd|st)/i,
    'last': /^last/i,
    'for': /^for/i,
    'time(s)': /^times?/i,
    'until': /^(un)?til/i,
    'forever': /^forever/i,
    'monday': /^mo(n(day)?)?/i,
    'tuesday': /^tu(e(s(day)?)?)?/i,
    'wednesday': /^we(d(n(esday)?)?)?/i,
    'thursday': /^th(u(r(sday)?)?)?/i,
    'friday': /^fr(i(day)?)?/i,
    'saturday': /^sa(t(urday)?)?/i,
    'sunday': /^su(n(day)?)?/i,
    'january': /^jan(uary)?/i,
    'february': /^feb(ruary)?/i,
    'march': /^mar(ch)?/i,
    'april': /^apr(il)?/i,
    'may': /^may/i,
    'june': /^june?/i,
    'july': /^july?/i,
    'august': /^aug(ust)?/i,
    'september': /^sep(t(ember)?)?/i,
    'october': /^oct(ober)?/i,
    'november': /^nov(ember)?/i,
    'december': /^dec(ember)?/i,
    'comma': /^(,\s*|(and|or)\s*)+/i,
    'Repeats': /^Repeats/i
  }
}

export default ENGLISH
