/**
 * Domain Layer - Value Objects
 * Objetos de valor inmutables que representan conceptos del dominio
 */

export class AccountNumber {
    private constructor(private readonly value: string) {
        this.validate();
    }

    private validate(): void {
        if (!this.value || this.value.length !== 10) {
            throw new Error('El número de cuenta debe tener 10 dígitos');
        }
        if (!/^\d+$/.test(this.value)) {
            throw new Error('El número de cuenta solo debe contener dígitos');
        }
    }

    static create(value: string): AccountNumber {
        return new AccountNumber(value);
    }

    getValue(): string {
        return this.value;
    }

    getMasked(): string {
        return `****-${this.value.slice(-4)}`;
    }

    equals(other: AccountNumber): boolean {
        return this.value === other.value;
    }
}

export class Money {
    private constructor(
        private readonly amount: number,
        private readonly currency: 'USD' = 'USD'
    ) {
        this.validate();
    }

    private validate(): void {
        if (this.amount < 0) {
            throw new Error('El monto no puede ser negativo');
        }
    }

    static create(amount: number, currency: 'USD' = 'USD'): Money {
        return new Money(amount, currency);
    }

    getAmount(): number {
        return this.amount;
    }

    getCurrency(): string {
        return this.currency;
    }

    format(): string {
        return `${this.currency} ${this.amount.toFixed(2)}`;
    }

    add(other: Money): Money {
        if (this.currency !== other.currency) {
            throw new Error('No se pueden sumar montos de diferentes monedas');
        }
        return Money.create(this.amount + other.amount, this.currency);
    }

    subtract(other: Money): Money {
        if (this.currency !== other.currency) {
            throw new Error('No se pueden restar montos de diferentes monedas');
        }
        return Money.create(this.amount - other.amount, this.currency);
    }

    isGreaterThan(other: Money): boolean {
        return this.amount > other.amount;
    }

    isLessThan(other: Money): boolean {
        return this.amount < other.amount;
    }

    equals(other: Money): boolean {
        return this.amount === other.amount && this.currency === other.currency;
    }
}

export class Email {
    private constructor(private readonly value: string) {
        this.validate();
    }

    private validate(): void {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(this.value)) {
            throw new Error('Email inválido');
        }
    }

    static create(value: string): Email {
        return new Email(value.toLowerCase().trim());
    }

    getValue(): string {
        return this.value;
    }

    equals(other: Email): boolean {
        return this.value === other.value;
    }
}

export class PhoneNumber {
    private constructor(private readonly value: string) {
        this.validate();
    }

    private validate(): void {
        const phoneRegex = /^(\+593|0)[0-9]{9}$/;
        if (!phoneRegex.test(this.value)) {
            throw new Error('Número de teléfono inválido. Formato: +593XXXXXXXXX o 0XXXXXXXXX');
        }
    }

    static create(value: string): PhoneNumber {
        return new PhoneNumber(value.replace(/\s/g, ''));
    }

    getValue(): string {
        return this.value;
    }

    format(): string {
        if (this.value.startsWith('+593')) {
            return `+593 ${this.value.slice(4, 6)} ${this.value.slice(6, 9)} ${this.value.slice(9)}`;
        }
        return `${this.value.slice(0, 2)} ${this.value.slice(2, 5)} ${this.value.slice(5, 9)}`;
    }

    equals(other: PhoneNumber): boolean {
        return this.value === other.value;
    }
}
