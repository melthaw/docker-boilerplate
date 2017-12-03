package in.clouthink.dass.boilerplate.cors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.embedded.FilterRegistrationBean;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;
import org.springframework.web.filter.HttpPutFormContentFilter;
import org.springframework.web.method.support.HandlerMethodReturnValueHandler;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.mvc.method.annotation.RequestResponseBodyMethodProcessor;

import javax.servlet.Filter;
import java.util.ArrayList;
import java.util.List;

/**
 *
 */
@Configuration
@EnableConfigurationProperties(NginxCorsProperites.class)
public class NginxCorsWebMvcConfigurer extends WebMvcConfigurerAdapter {

    @Autowired
    private NginxCorsProperites nginxCorsProperites;

    @Override
    public void addReturnValueHandlers(final List<HandlerMethodReturnValueHandler> returnValueHandlers) {
        List<HttpMessageConverter<?>> messageConverters = new ArrayList<>();
        messageConverters.add(new MappingJackson2HttpMessageConverter());
        returnValueHandlers.add(new RequestResponseBodyMethodProcessor(messageConverters));
    }

    //refer to : http://spring.io/blog/2015/06/08/cors-support-in-spring-framework
    @Bean
    public FilterRegistrationBean filterRegistrationBean() {
        final UrlBasedCorsConfigurationSource urlBasedCorsConfigurationSource = new UrlBasedCorsConfigurationSource();

        final CorsConfiguration corsConfiguration = new CorsConfiguration();
        corsConfiguration.setAllowCredentials(nginxCorsProperites.isAllowCredentials());
        corsConfiguration.addAllowedOrigin(nginxCorsProperites.getAllowOrigin());
        corsConfiguration.addAllowedHeader(nginxCorsProperites.getAllowHeader());
        corsConfiguration.addAllowedMethod(nginxCorsProperites.getAllowMethod());

        urlBasedCorsConfigurationSource.registerCorsConfiguration("/**", corsConfiguration);

        CorsFilter corsFilter = new CorsFilter(urlBasedCorsConfigurationSource);
        FilterRegistrationBean registration = new FilterRegistrationBean(corsFilter);
        registration.addUrlPatterns("/*");
        registration.setOrder(Ordered.HIGHEST_PRECEDENCE);
        return registration;
    }

    @Bean
    public FilterRegistrationBean httpMethodFilterRegistration() {
        FilterRegistrationBean registration = new FilterRegistrationBean();
        registration.setFilter(httpMethodFilter());
        registration.addUrlPatterns("/*");
        registration.setName("httpMethodFilter");
        registration.setOrder(Ordered.HIGHEST_PRECEDENCE + 1);
        return registration;
    }

    @Bean(name = "httpMethodFilter")
    public Filter httpMethodFilter() {
        return new HttpPutFormContentFilter();
    }

}
