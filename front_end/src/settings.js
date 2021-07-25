module.exports = {
  title: 'Vue Rails Sample',

  /**
   * @type {boolean} true | false
   * @description Whether show the settings right-panel
   */
  showSettings: true,

  /**
   * @type {boolean} true | false
   * @description Whether need tagsView
   */
  tagsView: true,

  /**
   * @type {boolean} true | false
   * @description Whether fix the header
   */
  fixedHeader: false,

  /**
   * @type {boolean} true | false
   * @description Whether show the logo in sidebar
   */
  sidebarLogo: false,

  /**
   * @type {string | array} 'production' | ['production', 'development']
   * @description Need show err logs component.
   * The default is only used in the production env
   * If you want to also use it in dev, you can pass ['production', 'development']
   */
  errorLog: 'production',

  prefectures: [
    { value: 0, text: 'pref.hokkaido' },
    { value: 1, text: 'pref.aomori' },
    { value: 2, text: 'pref.iwate' },
    { value: 3, text: 'pref.miyagi' },
    { value: 4, text: 'pref.akita' },
    { value: 5, text: 'pref.yamagata' },
    { value: 6, text: 'pref.fukushima' },
    { value: 7, text: 'pref.ibaraki' },
    { value: 8, text: 'pref.tochigi' },
    { value: 9, text: 'pref.gunma' },
    { value: 10, text: 'pref.saitama' },
    { value: 11, text: 'pref.chiba' },
    { value: 12, text: 'pref.tokyo' },
    { value: 13, text: 'pref.kanagawa' },
    { value: 14, text: 'pref.niigata' },
    { value: 15, text: 'pref.toyama' },
    { value: 16, text: 'pref.ishikawa' },
    { value: 17, text: 'pref.fukui' },
    { value: 18, text: 'pref.yamanashi' },
    { value: 19, text: 'pref.nagano' },
    { value: 20, text: 'pref.gifu' },
    { value: 21, text: 'pref.shizuoka' },
    { value: 22, text: 'pref.aichi' },
    { value: 23, text: 'pref.mie' },
    { value: 24, text: 'pref.shiga' },
    { value: 25, text: 'pref.kyoto' },
    { value: 26, text: 'pref.osaka' },
    { value: 27, text: 'pref.hyogo' },
    { value: 28, text: 'pref.nara' },
    { value: 29, text: 'pref.wakayama' },
    { value: 30, text: 'pref.tottori' },
    { value: 31, text: 'pref.shimane' },
    { value: 32, text: 'pref.okayama' },
    { value: 33, text: 'pref.hiroshima' },
    { value: 34, text: 'pref.yamaguchi' },
    { value: 35, text: 'pref.tokushima' },
    { value: 36, text: 'pref.kagawa' },
    { value: 37, text: 'pref.ehime' },
    { value: 38, text: 'pref.kochi' },
    { value: 39, text: 'pref.fukuoka' },
    { value: 40, text: 'pref.saga' },
    { value: 41, text: 'pref.nagasaki' },
    { value: 42, text: 'pref.kumamoto' },
    { value: 43, text: 'pref.oita' },
    { value: 44, text: 'pref.miyazaki' },
    { value: 45, text: 'pref.kagoshima' },
    { value: 46, text: 'pref.okinawa' },
    { value: 47, text: 'pref.other' }
  ],
  genders: [
    { value: 0, text: 'gender.not_known' },
    { value: 1, text: 'gender.male' },
    { value: 2, text: 'gender.female' },
    { value: 3, text: 'gender.self' },
    { value: 4, text: 'gender.not_applicable' }
  ]
}
