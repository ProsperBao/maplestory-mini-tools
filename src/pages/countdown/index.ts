export interface Buff {
  /**  Buff name key for i18n */
  key: string
  /**  Buff name prefix */
  prefix?: string
  /**  Buff name suffix */
  suffix?: string
  /**  Buff duration in seconds */
  duration: number
  /**  Buff icon */
  icon: string
  /**  Custom buff */
  custom?: boolean
  /** End time */
  end?: string
  /** Adjust time */
  adjust?: number
}

export function useBuffList() {
  const BUFF_PRESET: Buff[] = [
    {
      key: 't("countdown.buff.preset.1")',
      suffix: 't("countdown.buff.preset.suffix.1")',
      duration: 10 * 60,
      icon: '/assets/item/1.png',
    },
    {
      key: 't("countdown.buff.preset.1")',
      suffix: 't("countdown.buff.preset.suffix.2")',
      duration: 20 * 60,
      icon: '/assets/item/1.png',
    },
    {
      key: 't("countdown.buff.preset.1")',
      suffix: 't("countdown.buff.preset.suffix.3")',
      duration: 30 * 60,
      icon: '/assets/item/1.png',
    },
    {
      key: 't("countdown.buff.preset.2")',
      suffix: 't("countdown.buff.preset.suffix.1")',
      duration: 10 * 60,
      icon: '/assets/item/2.png',
    },
    {
      key: 't("countdown.buff.preset.2")',
      suffix: 't("countdown.buff.preset.suffix.2")',
      duration: 20 * 60,
      icon: '/assets/item/2.png',
    },
    {
      key: 't("countdown.buff.preset.2")',
      suffix: 't("countdown.buff.preset.suffix.3")',
      duration: 30 * 60,
      icon: '/assets/item/2.png',
    },
    {
      key: 't("countdown.buff.preset.3")',
      suffix: 't("countdown.buff.preset.suffix.1")',
      duration: 10 * 60,
      icon: '/assets/item/3.png',
    },
    {
      key: 't("countdown.buff.preset.3")',
      suffix: 't("countdown.buff.preset.suffix.2")',
      duration: 20 * 60,
      icon: '/assets/item/3.png',
    },
    {
      key: 't("countdown.buff.preset.3")',
      suffix: 't("countdown.buff.preset.suffix.3")',
      duration: 30 * 60,
      icon: '/assets/item/3.png',
    },
    {
      key: 't("countdown.buff.preset.4")',
      suffix: 't("countdown.buff.preset.suffix.1")',
      duration: 10 * 60,
      icon: '/assets/item/4.png',
    },
    {
      key: 't("countdown.buff.preset.4")',
      suffix: 't("countdown.buff.preset.suffix.2")',
      duration: 20 * 60,
      icon: '/assets/item/4.png',
    },
    {
      key: 't("countdown.buff.preset.4")',
      suffix: 't("countdown.buff.preset.suffix.3")',
      duration: 30 * 60,
      icon: '/assets/item/4.png',
    },
    {
      key: 't("countdown.buff.preset.5")',
      duration: 30 * 60,
      icon: '/assets/item/5.png',
    },
    {
      key: 't("countdown.buff.preset.6")',
      duration: 3600,
      icon: '/assets/item/6.png',
    },
    {
      key: 't("countdown.buff.preset.7")',
      duration: 30 * 60,
      icon: '/assets/item/7.png',
    },
    {
      key: 't("countdown.buff.preset.8")',
      prefix: 't("countdown.buff.preset.prefix.1")',
      suffix: 't("countdown.buff.preset.suffix.4")',
      duration: 15 * 60,
      icon: '/assets/item/8.png',
    },
    {
      key: 't("countdown.buff.preset.8")',
      prefix: 't("countdown.buff.preset.prefix.1")',
      suffix: 't("countdown.buff.preset.suffix.5")',
      duration: 30 * 60,
      icon: '/assets/item/8.png',
    },
    {
      key: 't("countdown.buff.preset.8")',
      prefix: 't("countdown.buff.preset.prefix.1")',
      suffix: 't("countdown.buff.preset.suffix.6")',
      duration: 30 * 60,
      icon: '/assets/item/8.png',
    },
    {
      key: 't("countdown.buff.preset.8")',
      prefix: 't("countdown.buff.preset.prefix.2")',
      suffix: 't("countdown.buff.preset.suffix.4")',
      duration: 15 * 60,
      icon: '/assets/item/8.png',
    },
    {
      key: 't("countdown.buff.preset.8")',
      prefix: 't("countdown.buff.preset.prefix.2")',
      suffix: 't("countdown.buff.preset.suffix.5")',
      duration: 30 * 60,
      icon: '/assets/item/8.png',
    },
    {
      key: 't("countdown.buff.preset.8")',
      prefix: 't("countdown.buff.preset.prefix.2")',
      suffix: 't("countdown.buff.preset.suffix.6")',
      duration: 30 * 60,
      icon: '/assets/item/8.png',
    },
    {
      key: 't("countdown.buff.preset.9")',
      duration: 2 * 60 * 60,
      icon: '/assets/item/9.png',
    },
    {
      key: 't("countdown.buff.preset.10")',
      duration: 2 * 60 * 60,
      icon: '/assets/item/10.png',
    },
    {
      key: 't("countdown.buff.preset.11")',
      duration: 30 * 60,
      icon: '/assets/item/11.png',
    },
    {
      key: 't("countdown.buff.preset.12")',
      duration: 30 * 60,
      icon: '/assets/item/12.png',
    },
    {
      key: 't("countdown.buff.preset.13")',
      duration: 30 * 60,
      icon: '/assets/item/13.png',
    },
    {
      key: 't("countdown.buff.preset.14")',
      duration: 30 * 60,
      icon: '/assets/item/14.png',
    },
    {
      key: 't("countdown.buff.preset.15")',
      duration: 30 * 60,
      icon: '/assets/item/15.png',
    },
    {
      key: 't("countdown.buff.preset.9")',
      prefix: 't("countdown.buff.preset.prefix.3")',
      duration: 30 * 60,
      icon: '/assets/item/16.png',
    },
    {
      key: 't("countdown.buff.preset.10")',
      prefix: 't("countdown.buff.preset.prefix.3")',
      duration: 30 * 60,
      icon: '/assets/item/17.png',
    },
    {
      key: 't("countdown.buff.preset.16")',
      duration: 15 * 60,
      icon: '/assets/item/18.webp',
    },
  ].map(b => ({
    ...b,
    key: b.key.replace(/t\("(.+)"\)/, '$1'),
    prefix: b.prefix?.replace(/t\("(.+)"\)/, '$1'),
    suffix: b.suffix?.replace(/t\("(.+)"\)/, '$1'),
  }))

  const list = useLocalStorage<Buff[]>('countdown-buff-list', BUFF_PRESET)

  return {
    list,
  }
}
