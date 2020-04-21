import {AbstractControl} from '@angular/forms';

export const isNotTemporalEmailValidator = (control: AbstractControl) => {

  const temporalDomains = [
    '10minutesmail.com',
    'temporalmail.com',
    'preventspam.com'
  ];

  if (temporalDomains.some(s => control.value.endsWith('@' + s))) {
    return { isNotTemporalEmail: true };
  }
};
