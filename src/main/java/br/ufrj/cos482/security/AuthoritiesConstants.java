package br.ufrj.cos482.security;

/**
 * Constants for Spring Security authorities.
 */
public final class AuthoritiesConstants {

    public static final String ADMIN = "ROLE_ADMIN";

    public static final String USER = "ROLE_USER";

    public static final String SECRETARIO_ACADEMICO = "ROLE_SECRETARIO_ACADEMICO";

    public static final String ALUNO = "ROLE_ALUNO";

    public static final String ANONYMOUS = "ROLE_ANONYMOUS";

    private AuthoritiesConstants() {
    }
}
