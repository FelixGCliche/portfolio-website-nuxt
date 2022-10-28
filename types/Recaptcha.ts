export interface RecaptchaProps {
  containerId: string
  callback: () => void
  expiredCallback?: () => void
  errorCallback?: () => void
  size?: RecaptchaSize
  theme?: RecaptchaTheme
}

export enum RecaptchaSize {
  Normal = 'normal',
  Compact = 'compact'
}

export enum RecaptchaTheme {
  Dark = 'dark',
  Light = 'light'
}
