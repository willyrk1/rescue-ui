export const getAge = date => {
  const daysAgo = (new Date() - new Date(date)) / (1000 * 60 * 60 * 24)
  const years = Math.floor(daysAgo / 365)
  const yearsString = years === 1 ? '1 Year' : years ? `${years} Years` : ''
  const comma = years ? ', ' : ''
  const months = Math.floor((daysAgo % 365) / 30)
  const monthString =
    months === 1 ? `${comma}1 Month` : months ? `${comma}${months} Months` : ''
  return `${yearsString}${monthString}`
}
