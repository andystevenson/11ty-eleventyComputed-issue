module.exports = {
  layout: (data) => data.layout || 'base.njk',
  title: (data) => data.title || 'hello world',
  allAboutTheBase: (data) => data.allAboutTheBase || 'what no base!',
}
